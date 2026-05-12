import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function User() {

  const [userData, setUserData] = useState([])

  // by Axios
  const fetchUserData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      <div className='row'>
        {userData.length > 0 && <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address && user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode + ' | Geo: ' + user.address.geo.lat + ', ' + user.address.geo.lng}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company && user.company.name + ', ' + user.company.catchPhrase + ', ' + user.company.bs}</td>


                  <td><NavLink to={"/user_detail/" + user.id} end={false} className='app-nav__link'> <i className='fa-solid fa-eye'>view</i></NavLink></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>No user data found</td>
              </tr>
            )}
          </tbody>
        </table>}
      </div>
    </>
  )
}
export default User