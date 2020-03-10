import React from 'react';
import Data from './MockData.json';

const List = function (props) {

    console.log("Props in List :", props);

    const data = Data;

    return (
        <div>
            <h3>List Component</h3>

            <table width="100%" style={{textAlign: 'left'}}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Location</th>
                </tr>
                {
                    data.map((item, index) => {
                        return (
                            <tr key={index} className={ index%2==0 ? "filled" : "no-filled" }>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.contact}</td>
                                <td>{item.contact}</td>
                                <td>{item.location}</td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    );
}
export default List;