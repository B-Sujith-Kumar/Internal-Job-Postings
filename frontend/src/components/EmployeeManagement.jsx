import { NavLink } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import "../App.css";
import EmpOperationCard from "./EmpOperationCard";
import EmployeeStats from "./EmployeeStats";
import MobileAdminSidebar from "./MobileAdminSidebar";

const EmployeeManagement = () => {
  return (
    <div>
      <AdminSidebar />
      <MobileAdminSidebar />
      {/* <DeleteEmployee /> */}
      <div className="min-h-screen main-content bg-dashboard font-rubik pl-10 pr-10 max-sm:px-6 pb-8">
        <p className="pt-8 text-slate-500">Pages / Employee Management</p>
        <h2 className="text-3xl mt-2 font-medium text-slate-800">
          Employee Management
        </h2>
        <div className="mt-8">
          <EmployeeStats />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-y-10 gap-8 max-[980px]:items-center max-xl:grid-cols-2 max-sm:grid-cols-1">
          <NavLink to="/admin/employee-management/add-employee">
            <div className="">
              <EmpOperationCard text="Add an employee" operation="Add" />
            </div>
          </NavLink>
          <NavLink to="/admin/employee-management/delete-employee">
            <div className="">
              <EmpOperationCard text="Delete an employee" operation="Delete" />
            </div>
          </NavLink>
          <NavLink to="/admin/employee-management/update-employee">
            <div className="">
              <EmpOperationCard text="Update an employee" operation="Update" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
