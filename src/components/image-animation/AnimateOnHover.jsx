import './animation.css';

const AnimateOnHover = () => {
    return (
        <div className='body'>
            <div className='card flamingo'>
                <div className="card_front">
                    <img  className='bird-img'
                        src="https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" alt="flamingo" />
                </div>
                <div className="card_back">
                    <p className="detail">
                        Flamingo
                    </p>
                </div>

            </div>
            <div className='card kingfisher'>
                <div className="card_front">
                    <img  className='bird-img'
                        src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2luZ2Zpc2hlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="kingfisher" />
                </div>
                <div className="card_back">
                    <p className="detail">
                        Kingfisher
                    </p>
                </div>

            </div>

            <div className='card peacock'>
                <div className="card_front">
                    <img  className='bird-img'
                        src="https://images.unsplash.com/photo-1536514900905-0d5511b9d489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="peacock" />
                </div>
                <div className="card_back">
                    <p className="detail">
                        Peacock
                    </p>
                </div>

            </div>
        </div>
        
    )
}

export default AnimateOnHover