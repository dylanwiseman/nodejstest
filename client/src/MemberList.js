import React, { useState, useEffect } from "react";
import axios from "axios";

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/members")
      .then((response) => setMembers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Company</th>
          <th>Department</th>
          <th>Phone</th>
          <th>Primary Address</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.id}>
            <td>
              {member.firstName} {member.lastName}
            </td>
            <td>{member.title}</td>
            <td>{member.company}</td>
            <td>{member.department}</td>
            <td>{member.phone}</td>
            <td>{members.addresses.find((a) => a.primaryAddress).address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberList;
