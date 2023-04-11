import {Component} from 'react'

import TabItem from './components/TabItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  onChangeLanguageGreeting = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state

    const languageGreeting = languageGreetingsList.find(
      each => activeTabId === each.id,
    )

    const {imageUrl, imageAltText} = languageGreeting

    console.log(languageGreeting)

    return (
      <div className="languageGreetingsContainer">
        <h1 className="heading"> Multilingual Greetings </h1>
        <ul className="languageGreetings">
          {languageGreetingsList.map(eachGreeting => (
            <TabItem
              key={eachGreeting.id}
              eachGreeting={eachGreeting}
              isActive={activeTabId === eachGreeting.id}
              onChangeLanguageGreeting={this.onChangeLanguageGreeting}
            />
          ))}
        </ul>
        <div className="image-container">
          <img src={imageUrl} alt={imageAltText} className="image" />
        </div>
      </div>
    )
  }
}

export default App
