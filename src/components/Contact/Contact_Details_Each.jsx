import React from 'react'

const Contact_Details_Each = (props) => {
    const {content, icon:Icon} = props;
  return (
    <div className="m-4 my-7 flex items-start">
        <Icon className="text-2xl text-blue-500 mr-4" />
        <p className="text-xl font-semibold font-raleway">{content}</p>
    </div>
  )
}

export default Contact_Details_Each
