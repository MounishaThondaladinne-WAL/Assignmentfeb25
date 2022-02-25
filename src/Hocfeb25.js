import { useEffect, useState } from "react";
import axios from 'axios';
const Hoc = (InputComponent) => {
    const Abc = () => {
        const [userOb, setUserOb] = useState({ username: "Default", hobbies: [] })
        useEffect(() => {
            axios.get("userob.json").then((res) => {
                console.log(res.data);
                setUserOb(res.data);
            });
        }, []);
        return <InputComponent userOb={userOb}/>
    }
    return Abc;
}
export default Hoc;