import Memo from "./Memo";

const Memos = (props) => {
    return (
        <>
            {
                props.memos.map((memo) => (
                    <Memo key={memo.id} text={memo.text}/>
                ))
            }
        </>
    )
}

export default Memos