import React from 'react'

export default function Warning({children, warningClass}) {


return <div className={warningClass}>
{children}
</div>
}