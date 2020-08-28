import React from 'react'
import Header from './Header'
import Quote from './QuoteComponent'
import { Redirect } from 'react-router';
import { render } from '@testing-library/react'

function Reading(){


    render()
    {
        return(
        <div className="Read">
            <Header />
            <Quote />
        </div>
        )
    }
}

export default Reading;