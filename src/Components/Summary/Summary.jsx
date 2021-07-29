import React from 'react'
import Card from './Card'
import {AiOutlineDesktop, AiOutlineShopping} from 'react-icons/ai';
import {IoCreateOutline} from 'react-icons/io5'
import { GrDocument} from 'react-icons/gr'
function Summary() {
    return (
        <div className="row">
        <Card logo={AiOutlineDesktop} value={120} title='MYNEW CLIENTS' />     
        <Card logo={IoCreateOutline} value={120} title='NEW PROJECT'/>     
        <Card logo={GrDocument} value={120} title='NEW INVOICES'/>     
        <Card logo={AiOutlineShopping} value={120} title='ALL PROJECTS'/>     
        </div>
    )
}

export default Summary
