// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props

  const {id, title} = todoDetails

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
