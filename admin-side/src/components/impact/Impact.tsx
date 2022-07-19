import { Link } from 'react-router-dom'
import { useGetImpactsQuery,useDeleteImpactMutation } from '../../slices/impactSlice';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Table} from 'antd';

function Impact() {
    const {data=[], isLoading} = useGetImpactsQuery();
    const [deleteImpact] = useDeleteImpactMutation();
    const columns = [
        {
            dataIndex:'id',
            title:'ID',
            width:100,
        },
        {
            dataIndex:'title',
            title:'Title',
            width: 300
        },
        {
            dataIndex: 'description',
            title: 'Description',
            width:200
        },
        {
            title:'Image',
            width:200,
            render: (row:any) => (
                <div>
                    <img style={{borderRadius:'50%'}} height={50} width={50} src={
                        row.photo?.startsWith('http') ? row.photo:
                        `https://uptech-agro.herokuapp.com/${row.photo}`
                    } alt="" />
                </div>
            )
        },
        {
            title:'*',
            render: (row:any) => (
                <div>
                    <Link to={`/editimpact/${row._id}`}>
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deleteImpact(row._id)}  className="icon-delete"/>
                </div>
            )
        },
    ]
    return (
        <div className="other">
            <div className="p-4">
                <div className="d-flex justify-content-around">
                    <h3 className="font-weight-bold">Impacts</h3>
                    <Link to='/addimpact'>Add Impact+</Link>
                </div>
                <Table columns={columns} loading={isLoading} dataSource={data} />

            </div>
        </div>
    )
}

export default Impact
