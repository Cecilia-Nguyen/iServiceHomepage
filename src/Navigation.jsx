import React from 'react'
import './Navigation.css'
import { Menu, Button} from 'semantic-ui-react'



function Navigation(props) {
    return (

        <Menu borderless   className='menu'
        >
            <Menu.Menu >
            <Menu.Item >IService</Menu.Item >

                <Menu.Item link
                    className='item'
                    name='Post a task'
                />
                <Menu.Item link
                    className='item'
                    name='Become an expert'
                />
                <Menu.Item link
                    className='item'
                    name='Find tasks'
                />
                <Menu.Item link
                    className='item'
                    name='How it works'
                />

                <Menu.Item >
                <Button className='cssButton' color='green'>Sign In</Button>

                </Menu.Item>


            </Menu.Menu>
        </Menu>
    )
}
export default Navigation