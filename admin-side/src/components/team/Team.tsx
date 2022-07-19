import { useGetTeamsQuery, useDeleteTeamMutation } from '../../slices/teamSlice';
import { Link } from 'react-router-dom';
import {Table} from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Team() {
    const { data=[], isLoading } = useGetTeamsQuery();
    const [deleteTeam] = useDeleteTeamMutation();
    

    const columns = [
        {
          dataIndex: 'completeName',
          title: 'Full name',
          width: 180,
          editable: false,
        },
        {
          dataIndex: 'address',
          title: 'Address',
          width: 150,
          editable: false,
        },
        {
          dataIndex: 'email',
          title: 'Email',
          width: 200,
          editable: false,
        },
        {
            dataIndex: 'phone',
            title: 'Phone Number',
            width: 150,
            editable: false,
        },
        {
            dataIndex: 'position',
            title: 'Position',
            width: 120,
            editable: false,
        },
        {
            key:'avatar',
            title: "Avatar",
            width: 120,
            render: (params:any)=>(
                <div>
                    <img alt="" style={{ borderRadius:'50%'}} src={params.avatar || `https://uptech-agro.herokuapp.com/${params.photo}`} width={50} height={50}/>
                </div>
            )
        },
        {
            dataIndex:'',
            title:'*',
            render:(row:any)=>(
                <div>
                    <Link to={`/editteam/${row.id}`}>
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deleteTeam(row.id)} className="icon-delete"/>
                </div>
            )
        }
      ];
    return (
        <div className="other">
            <div className="p-4">
                <div className="d-flex justify-content-around">
                    <h4>Team</h4>
                    <Link to='/addteam'>Add Member +</Link>
                </div>
                <Table dataSource={data} columns={columns} loading={isLoading} />
            </div>
        </div>
    )
}

export default Team
