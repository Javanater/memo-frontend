import Button from "./Button";

const Header = ({onCreate}) => {
    return (
        <header className='header'>
            <h1 className='header'>Memos</h1>
            <Button text='Create' color='green' onClick={onCreate}/>
        </header>
    )
}

export default Header