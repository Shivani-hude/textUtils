import React from 'react'

function Alertt(props) {
  const capitalize = (word)=>{
    const l = word.toLowercase()
    return l.charAt(0).toUppercase() + l.slice(1)
  }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.msg}</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alertt
