import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/Auth";
const AdminDashboard=()=>{
    const [auth,setAuth]=useAuth()
    return (
        <Layout>
            <div className="container-fluid"> 
            <div className="row">
                <div className="col-md-3 mt-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <div className="card  w-75 mt-4 p-2">
                        <h3>Admin Name: {auth?.user?.name}</h3>
                        <h3>Admin Email: {auth?.user?.email}</h3>
                        <h3>Admin Phone No: {auth?.user?.phone}</h3>

                    </div>
                </div>
            </div>
            </div> 
        </Layout>
    )
}
export default AdminDashboard