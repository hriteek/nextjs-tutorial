import Header from "../src/components/Header"

const Layout = (props)=>(
        <div>
        <Header/>
            {props.children}
        </div>
    )
export default Layout;