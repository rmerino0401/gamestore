export default function Loading() {
    return (
        // <div>
        //     <i className="fas fa-gamepad fa-spin fa-6x"></i>
        // </div>

        <div style={{
            position:'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex:99,
            backgroundColor:'lightblue'
        }}>
              
        <i
        className="fas fa-gamepad fa-spin fa-6x"
        style={{            
            color:'slateblue',
            position: 'absolute',
            top:'calc(50% - 50px)',
            left:'calc(50% - 50px)'
            }}
            />
            </div>
    )
        }
