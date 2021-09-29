import Button from "./Button";

const Header = ({onCreate, createCancel}) => {
    return (
        <header className='header'>
            <h1 className='header'>Memos</h1>
            <Button text={createCancel ? 'Cancel' : 'Create'} color='green' onClick={onCreate}/>
        </header>
    )
}

export default Header