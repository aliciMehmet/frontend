import React, { useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import { BusinessNavi } from '../BusinessNavi';

export default function OnlineWaiters() {
  const { user } = React.useContext(AuthContext)
  
  const [waiters, setWaiters] = useState([])

  function getUser(id){

    let businessService = new BusinessService();
    businessService.getUserById(id).then(result => {
      if (result.data != null) {

        console.log(result.data.data.username)
        return result.data.data.username;
         


      }
    })
  }

  





  useEffect(() => {
    let businessService = new BusinessService();
    businessService.getWaiters(user.token).then(result => {
      if (result.data != null) {

        console.log(result.data.data)
          setWaiters(Object.keys(result.data.data))
          console.log(Object.keys(result.data.data));

          Object.keys(result.data.data).map(function(key) {
        });


      }
    })
  }, []);

    

    
  return (
    <div>
      <BusinessNavi/>
      <div>
                <br></br>
                <h1 className='text-center'>Online Waiters</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                {/* <th>Username</th>
                                <th>buton</th> */}

                                
                            </tr>
                        </thead>
                        <tbody>

                        {
                           waiters.map(
                            (us) =>
                                <tr >
                                    <td>{us} </td>
                                    {/* <td>{getUser(us)} </td> */}

                                    


                                    {/* <td><button className="btn btn-warning" onClick={() => getUser(us)}>Delete</button></td> */}
                                </tr>
                        )
                              
                            }
                          
                        </tbody>
                    </table>
                    
                </div>
            </div>




    </div>
  )
}
