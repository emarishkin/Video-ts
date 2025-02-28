

interface ModalProps{
    children: React.ReactNode
}


export function Modal({children}:ModalProps){
    return (
        <>
        <div className="modal1">
            
        </div>

        <div className="modal11">
            <h1>Modal</h1>
            {children}
        </div>
        </>
    )
}