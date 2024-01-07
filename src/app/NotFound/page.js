"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const NotFound = () => {

    const route = useRouter();
    const {t} = useTranslation();
    
  return (
    <div className='notFound_main_page'>
        <div className='notFound_icon'><img className='Logo' src='/SDN-Logo.png'/></div>
        <p className='notFound_text'>{t("Sorry")}..</p>
        <p className='notFound'>{t("404 Not Found")}</p>
    </div>
  )
}

export default NotFound