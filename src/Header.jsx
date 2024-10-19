import 'bootstrap/dist/css/bootstrap.min.css';
function Header(){
    const headingStyle = {
        fontSize : "66px"
        ,textAlign : "center"
        ,color : "white"
    }
    return (
        <div className='bg-primary'>
        <ul >
            <h1 style={headingStyle}>To-Do-List</h1>
        </ul>
        </div>
    );
};
export default Header;