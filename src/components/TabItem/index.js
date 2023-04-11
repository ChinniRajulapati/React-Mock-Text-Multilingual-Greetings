import './index.css'

const TabItem = props => {
  const {eachGreeting, onChangeLanguageGreeting, isActive} = props

  const {id, buttonText} = eachGreeting

  const onClickLanguageGreeting = () => {
    onChangeLanguageGreeting(id)
  }

  const activeTabClassName = isActive ? 'active-button' : 'inactive-button'

  return (
    <li key={id} className="languageGreetingItem">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickLanguageGreeting}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
