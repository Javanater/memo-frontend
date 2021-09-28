import Button from "./Button";

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header'>Memos</h1>
            <Button text='Create' color='green'/>
        </header>
    )
}

export default Header