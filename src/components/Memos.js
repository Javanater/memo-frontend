import Memo from "./Memo";

const Memos = (props) => {
    return (
        <>
            {
                props.memos.map((memo) => (
                    <Memo key={memo.id} text={memo.text} onDelete={props.onDelete} memoID={memo.id}/>
                ))
            }
        </>
    )
}

export default Memos