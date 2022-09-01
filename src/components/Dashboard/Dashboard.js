import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.css'
import LogoIcon from '../../icons/logo.svg'

function Dashboard() {
    const [columns, setColumns] = useState(Array)
    const [columnName, setColumnName] = useState('')
    const [columnType, setColumnType] = useState('String')
    const [isDark, setDark] = useState(false)
    const [isMenu, setMenu] = useState(false)
    const [isTable, setTable] = useState(false)
    const [tableName, setTableName] = useState('')
    const [columnIssue, setColumnIssue] = useState(false)
    const [tables, setTables] = useState(Array)
    const [required, setRequired] = useState('false')
    const [defaultValue, setDefaultValue] = useState('')
    const [useJWT, setUseJWT] = useState(false)
    const [useExpress, setUseExpress] = useState(true)
    const [database, setDatabase] = useState('mysql')

    const openTwitter = () => {
        window.open('https://twitter.com/codevocations')
    }

    const closeTableCard = () => {
        setTable(false)
        setColumnIssue(false)
        setColumns([])
        setColumnName('')
        setTableName('')
        setRequired('false')
        setDefaultValue('')
        setColumnType('String')
    }

    const addColumn = () => {
        if (columns.filter((column) => column.name == columnName).length > 0) {
            setColumnIssue('Such column already exists.')
        } else {
            if (columnName.trim() === '') {
                setColumnIssue('Please type the column name.')
            } else {
                columns.push({ 
                    name: columnName, 
                    type: columnType, 
                    required,
                    default_value: defaultValue
                })
                setColumnIssue(false)
                setColumns(columns)
                setColumnName('')
                setRequired('false')
                setDefaultValue('')
                setColumnType('String')
            }
        }
    }

    const removeColumn = (column) => {
        const newColumns = columns.filter(item => item.name !== column.name)
        setColumns(newColumns)
    }

    const removeTable = (table) => {
        const newTables = tables.filter(item => item.name !== table.name)
        setTables(newTables)
    }

    const saveTable = () => {
        if (tableName.trim() === '') {
            setColumnIssue('Please type the table name.')
        } else {
            if (tables.filter((table) => table.name == tableName).length > 0) {
                setColumnIssue('Such table already exists.')
            } else {
                if (columns.length === 0) {
                    setColumnIssue('Please creates the columns.')
                } else {
                    tables.push({
                        name: tableName,
                        columns
                    })
                    setTables(tables)
                    setTable(false)
                    setTableName('')
                    setColumnIssue(false)
                    setColumns([])
                    setColumnName('')
                    setRequired('false')
                    setDefaultValue('')
                    setColumnType('String')
                }
            }
        }
    }

    return (
        <div className='Dashboard'>
            { isMenu &&
                <div className='InfoCard'>
                    <div className='LeftMenu'>
                        <svg className='menu' onClick={() => setMenu(!isMenu)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                        <svg className='twitter' onClick={() => openTwitter()} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px"><path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
                    </div>
                    <div className='InfoCardConstructor'>
                        <div className='Header'>
                            <img src={LogoIcon}/>
                            <span><span className='green'>code.</span>vocations</span>
                        </div>
                        <div className='Body'>
                            <span className='Info'>The project was created by <a href='https://www.linkedin.com/in/daniel-nikulshyn-741986189'>me</a> in 2022. At first it was my own utility to speed up my work on startups and then I decided it was a good tool to share with others. Despite this time, when there is a war in my country, I try to do something useful. I wish everyone easy coding and have a nice day ;)</span>
                            <span className='InfoButton'><a href='https://twitter.com/codevocations'>Discover all updates</a></span>
                        </div>
                    </div>
                </div>
            }
            { isTable &&
                <div className='CardBackground'>
                    <div className={isDark ? 'TableCard dark' : 'TableCard white'}>
                        <div className='CardHeader'>
                            <span>Add Table With Columns</span>
                            <svg onClick={() => closeTableCard()} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={isDark ? '#fff' : '#1b1f23'}><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                        </div>
                        { columnIssue &&
                            <div className='columnIssue'><b>Warning!</b> {columnIssue}</div>
                        }
                        <div className='ColumnHeader'>
                            <input onChange={(e) => setColumnName(e.target.value)} value={columnName} className={isDark ? 'field dark' : 'field white'} placeholder='column_name'/>
                            <select onChange={(e) => setColumnType(e.target.value)} value={columnType} className={isDark ? 'dark' : 'white'}>
                                <option value={'String'}>String</option>
                                <option value={'Number'}>Number</option>
                                <option value={'Array'}>Array</option>
                                <option value={'BigInt'}>BigInt</option>
                                <option value={'Boolean'}>Boolean</option>
                                <option value={'Date'}>Date</option>
                            </select>
                            <select onChange={(e) => setRequired(e.target.value)} value={required} className={isDark ? 'dark' : 'white'}>
                                <option value={'false'}>Is not required</option>
                                <option value={'true'}>Is required</option>
                            </select>
                            <input onChange={(e) => setDefaultValue(e.target.value)} value={defaultValue} className={isDark ? 'field dark' : 'field white'} placeholder='default_value'/>
                            <div onClick={() => addColumn()} className={isDark ? 'Button dark' : 'Button white'}>ADD</div>
                        </div>
                        <div className={isDark ? 'ColumnList dark' : 'ColumnList white'}>
                            { 
                                columns.length > 0 ? columns.map(column => {
                                    return (
                                        <div className='columnRow'>
                                            <span>{ column.name }</span> <span>{ column.type }</span> <span>{ column.required === 'true' ? 'Is required' : 'Is not required' }</span> <span>{ column.default_value }</span> <div className={isDark ? 'Button dark' : 'Button white'} onClick={() => removeColumn(column)}>REMOVE</div>
                                        </div>
                                    )    
                                }) : <p>no columns</p>
                            }
                        </div>
                        <div className='ColumnBottom'>
                            <input className={isDark ? 'field dark' : 'field white'} onChange={(e) => setTableName(e.target.value)} value={tableName} placeholder='table_name'/>
                            <div className={isDark ? 'Button dark' : 'Button white'} onClick={() => saveTable()}>SAVE</div>
                            <div className={isDark ? 'Button dark' : 'Button white'} onClick={() => closeTableCard()}>CANCEL</div>
                        </div>
                    </div>
                </div>
            }
            <div className={isDark ? 'LeftMenu dark' : 'LeftMenu white'}>
                <svg className='menu' onClick={() => setMenu(!isMenu)} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill={isDark ? '#fff' : '#1b1f23'}><path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
                <svg className='twitter' onClick={() => openTwitter()} fill={isDark ? '#fff' : '#000000'} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px"><path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
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
                                <div className='CheckOption'><input checked={useExpress} onChange={(e) => setUseExpress(true)} type="checkbox"/> Express.js</div>
                            </div>
                        </div>
                        <div className='ParamItem'>
                            <div className='ItemTitle'>
                                Database
                            </div>
                            <div className='ItemOptions'>
                                <div className='CheckOption'><input type="checkbox" checked={database === 'mysql' ? true : false} onChange={() => setDatabase('mysql')}/> MySQL</div>
                                <div className='CheckOption'><input type="checkbox" checked={database === 'postgresql' ? true : false} onChange={() => setDatabase('postgresql')}/> PostgreSQL <div className='cost' title='price of this option'>4$</div></div>
                                <div className='CheckOption'><input type="checkbox" checked={database === 'mariadb' ? true : false} onChange={() => setDatabase('mariadb')}/> MariaDB</div>
                                <div className='CheckOption'><input type="checkbox" checked={database === 'sqlite' ? true : false} onChange={() => setDatabase('sqlite')}/> SQLite</div>
                                <div className='CheckOption'><input type="checkbox" checked={database === 'microsoft_sql_server' ? true : false} onChange={() => setDatabase('microsoft_sql_server')}/> Microsoft SQL Server</div>
                                <div className='CheckOption'><input type="checkbox" checked={database === 'mongodb' ? true : false} onChange={() => setDatabase('mongodb')}/> MongoDB <div className='cost' title='price of this option'>5$</div></div>
                            </div>
                        </div>
                        <div className='ParamItem'>
                            <div className='ItemTitle'>
                                Auth
                            </div>
                            <div className='ItemOptions'>
                                <div className='CheckOption'><input value={useJWT} onChange={() => setUseJWT(!useJWT)} type="checkbox"/> JWT <div className='cost' title='price of this option'>3$</div></div>
                                { useJWT &&  <div className='tip'>'users' table will be created automatically</div>}
                            </div>
                        </div>
                        <div className='ParamItem'>
                            <div className='ItemTitle'>
                                Project Metadata
                            </div>
                            <div className='ItemOptions'>
                                <div className='FieldOption'>Name <input placeholder='demo' className={isDark ? 'field dark' : 'field white'}/></div>
                                <div className='FieldOption'>Description <input placeholder='demo project' className={isDark ? 'field dark' : 'field white'}/></div>
                                <div className='FieldOption'>Package name <input placeholder='com.example.demo' className={isDark ? 'field dark' : 'field white'}/></div>
                                <div className='FieldOption'>Author <input placeholder='your name' className={isDark ? 'field dark' : 'field white'}/></div>
                            </div>
                        </div>
                    </div>
                    <div className='RightBodyPart'>
                        <div className='RightBodyHeader'>
                            <div className='ItemTitle'>
                                Database Tables
                            </div>
                            <div className={isDark ? 'Button dark' : 'Button white'} onClick={() => setTable(true)}>
                                ADD TABLE
                            </div>
                        </div>
                        <div className='ListOfTables'>
                            { 
                                tables.length > 0 ?
                                    tables.map(table => {
                                        return (
                                            <div className='TableRow'>
                                                <span>{ table.name }</span> <div className={isDark ? 'Button dark' : 'Button white'} onClick={() => removeTable(table)}>REMOVE</div>
                                            </div>
                                        )
                                    })
                                : 
                                    <p className='EmptyList'>No table created</p>
                            }
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
  