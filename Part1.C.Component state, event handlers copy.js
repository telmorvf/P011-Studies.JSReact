// Component state, event handlers ================================================================
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

// Component helper functions =====================================================================
const Hello = (props) => {

  const nasceuAno = () => {
   const yearNow = new Date().getFullYear()
   return yearNow - props.age
 }

 return (
   <div>
     <p>
       Hello {props.name}, you are {props.age} years old
     </p>

     <p>So you were probably born in {bornYear()}</p>
   </div>
 )
}

// Destructuring ==================================================================================

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


// Page re-rendering ==============================================================================

https://fullstackopen.com/en/part1/component_state_event_handlers#page-re-rendering


// Stateful component =============================================================================
// "Componente com monitoração de estado"

https://fullstackopen.com/en/part1/component_state_event_handlers#stateful-component


// EVENT Handling =================================================================================

https://fullstackopen.com/en/part1/component_state_event_handlers#event-handling


// An event handler is a function =================================================================

https://fullstackopen.com/en/part1/component_state_event_handlers#an-event-handler-is-a-function


// Passing state - to child components ============================================================

https://fullstackopen.com/en/part1/component_state_event_handlers#passing-state-to-child-components


// Changes in state cause re-rendering ============================================================
https://fullstackopen.com/en/part1/component_state_event_handlers#changes-in-state-cause-re-rendering


// Refactoring the components =====================================================================

https://fullstackopen.com/en/part1/component_state_event_handlers#refactoring-the-components