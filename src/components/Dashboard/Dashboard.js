import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.css'
import LogoIcon from '../../icons/logo.svg'

function Dashboard() {
    const [database, setDatabase] = useState('No database is selected')
    const [isLoading, setLoading] = useState(true)
    const [isDark, setDark] = useState(false)
    const [isMenu, setMenu] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })

    return (
        <div className='Dashboard'>
            { isMenu &&
                <div className='InfoCard'>
                    <div className='LeftMenu'>
                        <svg onClick={() => setMenu(!isMenu)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                    </div>
                    <div className='InfoCardConstructor'>
                        <div className='Header'>
                            <img src={LogoIcon}/>
                            <span><span className='green'>code.</span>vocations</span>
                        </div>
                        <div className='Body'>
                            <span>The project was created by <a href='https://www.linkedin.com/in/daniel-nikulshyn-741986189/'>me</a> in 2022. At first it was my own utility to speed up my work on startups and then I decided it was a good tool to share with others. Despite this time, when there is a war in my country, I try to do something useful. I wish everyone easy coding and have a nice day ;)</span>
                        </div>
                    </div>
                </div>
            }
            <div className={isDark ? 'LeftMenu dark' : 'LeftMenu white'}>
                <svg onClick={() => setMenu(!isMenu)} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill={isDark ? '#fff' : '#1b1f23'}><path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
            </div>
            <div className={isDark ? 'Constructor dark' : 'Constructor white'}>
                <div className='Header'>
                    <img src={LogoIcon}/>
                    <span><span className='green'>code.</span>vocations</span>
                </div>
                <div className='Body'>
                    <div className='LeftBodyPart'>
                        <div className='ParamItem'>
                            <div className='ItemTitle'>
                                Framework
                            </div>
                            <div className='ItemOptions'>
                                <div className='CheckOption'><input type="checkbox"/> Express.js</div>
                            </div>
                        </div>
                        <div className='ParamItem'>
                            <div className='ItemTitle'>
                                Database
                            </div>
                            <div className='ItemOptions'>
                                <div className='CheckOption'><input type="checkbox"/> MySQL</div>
                                <div className='CheckOption'><input type="checkbox"/> PostgreSQL <div className='cost' title='price of this option'>4$</div></div>
                                <div className='CheckOption'><input type="checkbox"/> MariaDB</div>
                                <div className='CheckOption'><input type="checkbox"/> SQLite</div>
                                <div className='CheckOption'><input type="checkbox"/> Microsoft SQL Server</div>
                                <div className='CheckOption'><input type="checkbox"/> MongoDB <div className='cost' title='price of this option'>5$</div></div>
                            </div>
                        </div>
                        <div className='ParamItem'>
                            <div className='ItemTitle'>
                                Auth
                            </div>
                            <div className='ItemOptions'>
                                <div className='CheckOption'><input type="checkbox"/> JWT <div className='cost' title='price of this option'>3$</div></div>
                            </div>
                        </div>
                        <div className='ParamItem'>
                            <div className='ItemTitle'>
                                Project Metadata
                            </div>
                            <div className='ItemOptions'>
                                <div className='FieldOption'>Name <input className={isDark ? 'field dark' : 'field white'}/></div>
                                <div className='FieldOption'>Description <input className={isDark ? 'field dark' : 'field white'}/></div>
                                <div className='FieldOption'>Package name <input className={isDark ? 'field dark' : 'field white'}/></div>
                                <div className='FieldOption'>Author <input className={isDark ? 'field dark' : 'field white'}/></div>
                            </div>
                        </div>
                    </div>
                    <div className='RightBodyPart'>
                        <div className='RightBodyHeader'>
                            <div className='ItemTitle'>
                                Database Tables
                            </div>
                            <div className={isDark ? 'Button dark' : 'Button white'}>
                                ADD TABLE
                            </div>
                        </div>
                        <div className='ListOfTables'>
                            <p className='EmptyList'>No table created</p>
                        </div>
                    </div>
                </div>
                <div className={isDark ? 'Footer dark' : 'Footer white'}>
                    <div className={isDark ? 'Button dark' : 'Button white'}>
                        GENERATE
                    </div>
                    <div className={isDark ? 'Button dark' : 'Button white'}>
                        SHARE...
                    </div>
                </div>
            </div>
            <div className={isDark ? 'RightMenu dark' : 'RightMenu white'}>
                <div className={isDark ? 'Theme white' : 'Theme dark'}>
                    <div className={isDark ? 'Sun white' : 'Sun dark'} onClick={() => setDark(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={isDark ? '#1b1f23' : '#fff'}><path d="M0 0h24v24H0z" fill="none"/><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></svg>
                    </div>
                    <div className={isDark ? 'Moon dark' : 'Moon white'} onClick={() => setDark(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill={isDark ? '#fff' : '#1b1f23'}><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><path d="M14,2c1.82,0,3.53,0.5,5,1.35C16.01,5.08,14,8.3,14,12s2.01,6.92,5,8.65C17.53,21.5,15.82,22,14,22C8.48,22,4,17.52,4,12 S8.48,2,14,2z"/></g></g></g></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
  