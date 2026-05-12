import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function UserDetail() {

  const { id } = useParams()
  const [userDetailData, setUserDetailData] = useState([])
  // by Axios
  const fetchUserData = async () => {
    if (id) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      console.log(response.data);
      setUserDetailData(response.data)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <section className='page'>
      <h1>User Detail</h1>
      <p>User Detail page</p>
      <p>Name: {userDetailData.name || 'No name found'}</p>
      <p>Username: {userDetailData.username || 'No username found'}</p>
      <p>Email: {userDetailData.email || 'No email found'}</p>
      <p>Address: {userDetailData.address && userDetailData.address.street + ', ' + userDetailData.address.suite + ', ' + userDetailData.address.city + ', ' + userDetailData.address.zipcode + ' | Geo: ' + userDetailData.address.geo.lat + ', ' + userDetailData.address.geo.lng || 'No address found'}</p>
      <p>Phone: {userDetailData.phone || 'No phone found'}</p>
      <p>Website: {userDetailData.website || 'No website found'}</p>
      <p>Company: {userDetailData.company && userDetailData.company.name + ', ' + userDetailData.company.catchPhrase + ', ' + userDetailData.company.bs || 'No company found'}</p>
    </section>
  )
}

export default UserDetail