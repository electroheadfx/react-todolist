import React from 'react'
import PropTypes from 'prop-types'
import { Badge, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'

const Task = ({ task, cancel, complete }) => {
  const getCompleted = () => task.completed ? "Terminée" : "En cours"
  const getColor = () => task.completed ? "success" : "warning"
  return (
    <ListGroupItem variant={getColor()}>
      <h2 className="h4">
        {task.title}
        <Badge className="float-right" variant={getColor()}>{getCompleted()}</Badge>
      </h2>
    </ListGroupItem>
  )
}

Task.propTypes = {
  task: PropTypes.instanceOf(TaskModel).isRequired,
  cancel: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
}

export default Task