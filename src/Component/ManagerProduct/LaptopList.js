import React, {Component} from "react";
import axios from "axios";
import Modal from 'react-modal';


class LapTopList extends Component {

    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false,
            laptops : [], 
            loais : [],
            ID_LAPTOP: '',
            TEN_LAPTOP: '',
            MOTANGAN_LAPTOP: '',
            MOTA_LAPTOP: '',
            GIA_LAPTOP: '',
            IMG: '',
            ID_LOAI: '',
            loais: []
        }
      }

    componentDidMount() {
        axios.get('/api/laptop')
        .then(res => {
        const laptop = res.data.products
        //console.log(res.data.products)
        this.setState({laptops : laptop})
        //this.props.fetchAllLaptops(res.data.laptops)
        })
        .catch(error => console.log(error));
        axios.get('/api/loai')
        .then(res => {
            const loais = res.data.loais;
            //console.log(res.data.loais)
            this.setState({ loais :loais });
            })
        .catch(error => console.log(error));

        axios.get('/api/loai')
            .then(res => {
            const loais = res.data.loais;
            console.log(res.data.loais)
            this.setState({ loais :loais });
            })
            .catch(error => console.log(error));
    }

    componentWillUnmount = () => {
        Modal.setAppElement('body')
    }
 
    openModal = (item) => {
        this.setState({
            modalIsOpen: true,
            ID_LAPTOP: item.ID_LAPTOP,
            TEN_LAPTOP: item.TEN_LAPTOP,
            MOTANGAN_LAPTOP: item.MOTANGAN_LAPTOP,
            MOTA_LAPTOP: item.MOTA_LAPTOP,
            GIA_LAPTOP: item.GIA_LAPTOP,
            IMG: item.IMG,
            ID_LOAI: item.ID_LOAI
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    handleEditSubmit = (e) => {
        e.preventDefault();

        const laptopUpdate = {
            ID_LAPTOP: this.state.ID_LAPTOP,
            TEN_LAPTOP: this.state.TEN_LAPTOP,
            MOTANGAN_LAPTOP: this.state.MOTANGAN_LAPTOP,
            MOTA_LAPTOP: this.state.MOTA_LAPTOP,
            GIA_LAPTOP: this.state.GIA_LAPTOP,
            IMG: this.state.IMG,
            ID_LOAI: this.state.ID_LOAI
        }

        axios.post('http://localhost:4000/laptop/api/update', laptopUpdate)
        .then(res => {
            var key = this.state.ID_LAPTOP
            this.setState(prevState => ({
                laptops: prevState.laptops.map(
                    elm => elm.ID_LAPTOP === key ? {
                        ...elm,
                        TEN_LAPTOP: this.state.TEN_LAPTOP,
                        MOTANGAN_LAPTOP: this.state.MOTANGAN_LAPTOP,
                        MOTA_LAPTOP: this.state.MOTA_LAPTOP,
                        GIA_LAPTOP: this.state.GIA_LAPTOP,
                        IMG: this.state.IMG,
                        ID_LOAI: this.state.ID_LOAI
                    }:elm
                )
            }))
            alert("Sửa Thành Công!")
            this.closeModal()
        })
        .catch(error => console.log(error));
    }

    handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name] : value
        })
    }

    handleInsertSubmit = (e) => {
        e.preventDefault();
        var a = false
        if(document.getElementById("id").value === ""){
            alert("Hãy nhập đầy đủ id!")
            a = false
        }
        if(document.getElementById("name").value === ""){
            alert("Hãy nhập đầy đủ Tên!")
            a = false
        }
        if(document.getElementById("shortdes").value === ""){
            alert("Hãy nhập đầy đủ mô tả ngắn!")
            a = false
        }
        if(document.getElementById("desDetail").value === ""){
            alert("Hãy nhập đầy đủ mô tả chi tiết!")
            a = false
        }
        if(document.getElementById("price").value === ""){
            alert("Hãy nhập đủ giá và nhập bằng số dương!")
            a = false
        }
        if(document.getElementById("img").value === ""){
            alert("Hãy nhập đủ ảnh bằng link!")
            a = false
        }
        if(document.getElementById("loai").value === ""){
            alert("Hãy chọn loại Laptop!")
            a = false
        }
        else{
            a = true
        }
        
        if(a === false){
            console.log(a)
        }else{
            const newLaptop = {
                ID_LAPTOP: this.state.txtId,
                TEN_LAPTOP: this.state.txtTen,
                MOTANGAN_LAPTOP: this.state.txtMoTaNgan,
                MOTA_LAPTOP: this.state.txtMoTa,
                GIA_LAPTOP: this.state.txtGia,
                IMG: this.state.txtAnh,
                ID_LOAI: this.state.txtIdLoai
            };
            console.log(newLaptop);
            axios.post('http://localhost:4000/laptop/api/insert', newLaptop)
            .then(res => {
                alert("Thêm Laptop thành công!")
                let laptops = this.state.laptops
                laptops = [newLaptop,...laptops]
                this.setState({laptops : laptops})
                var c = " "
                document.getElementById('id').value = c
                document.getElementById('name').value = c
                document.getElementById('shortdes').value = c
                document.getElementById('desDetail').value = c
                document.getElementById('price').value = c
                document.getElementById('img').value = c
            })
            .catch(error => console.log(error));
        }
    }

    handleDetele = (item ) => {
        const idLaptopNew = {
            ID_LAPTOP: item.ID_LAPTOP
        }
        if(confirm('Bạn chắc chắn muốn xóa không? ')){ //eslint-disable-line
            axios.post('http://localhost:4000/laptop/api/delete', idLaptopNew)
            .then(res => {
                this.setState(prevState => ({
                    laptops: prevState.laptops.filter(elm => elm.ID_LAPTOP !== item.ID_LAPTOP)
                }));
                alert("Xóa Thành Công!")
                
            })
            .catch(err => console.log(err))
        }
    }

    price = (p) => {
        return(parseFloat(p).toLocaleString("en"));
      }

    render(){
        
        var {laptops} = this.state
        console.log(laptops);
        var {loais} = this.state
        console.log(loais);
        //console.log(laptops);
    
        return(
            
            <div className="panel panel-primary mr-top">

                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Sản Phẩm</h3>
                </div>
                <div className="panel-body">
        
                    
                    <form onSubmit={this.handleInsertSubmit} className="form-horizontal" >
                            <div className="form-group">
                                <label htmlFor="id">ID Laptop:</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="id"
                                    name="txtId"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Tên Laptop:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name"
                                    name="txtTen"
                                    onChange={this.handleInputChange}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shortdes">Mô tả ngắn:</label>
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="shortdes"
                                    name="txtMoTaNgan"
                                    onChange={this.handleInputChange}
                                >
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="desDetail">Mô tả chi tiết:</label>
                                <textarea 
                                    className="form-control" 
                                    rows="8" 
                                    id="desDetail"
                                    name="txtMoTa"
                                    onChange={this.handleInputChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Giá:</label>
                                <input 
                                    type="number"
                                    min="0" 
                                    className="form-control" 
                                    id="price"
                                    name="txtGia"
                                    onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="img">Link ảnh:</label>
                                <input 
                                    type="url" 
                                    className="form-control" 
                                    id="img"
                                    name="txtAnh"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="loai">Loại Laptop (in: Inspiron, vos: Vostro, gm: Gaming):</label>
                                {/**
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="loai"
                                    name="txtIdLoai"
                                    onChange={this.handleInputChange}
                                    /> */}
                                <select className="form-control"  name="txtIdLoai" id="loai" onChange={this.handleInputChange}>
                                    <option value="">Chọn</option>
                                {/**<option value="in">Inspiron</option>
                                    <option value="vos">Vostro</option>
                                    <option value="gm">Gaming</option> */}
                                    {loais.map((item, index) => {
                                        return (
                                                <option value={item.ID_LOAI} key={index}>{item.TEN_LOAI}</option>
                                        )
                                    })}
                                </select>

                                
                               
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10 col-sm-offset-2">
                                    <button type="submit" className="btn btn-primary">Lưu</button>
                                </div>
                            </div>
                    </form>
                    
        
                </div>



                <div className="panel-heading">
                        <h3 className="panel-title">Quản Lý Laptop</h3>
                </div>
                <div className="panel-body">
                    
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Mã Laptop</th>
                                <th>Tên Laptop</th>
                                <th>Giá</th>
                                <th>Mô Tả Ngắn</th>
                                <th>Ảnh</th>
                                <th>Mã Loại</th>
                                <th>Hành Động</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {laptops.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.ID_LAPTOP}</td>
                                        <td>{item.TEN_LAPTOP}</td>
                                        <td>{this.price(item.GIA_LAPTOP)} vnđ</td>
                                        <td>{item.MOTANGAN_LAPTOP}</td>
                                        <td>
                                            <img className="img-sz" src={`${item.IMG}`} alt="laptop"/>
                                        </td>
                                        <td>{item.ID_LOAI}</td>
                                        <td>
                                            <button 
                                                type="button" 
                                                className="mr-5 btn btn-warning"
                                                onClick={() => this.openModal(item)}
                                            >Sửa</button>
                                            <button 
                                                type="button" 
                                                className="mr-5 btn btn-danger"
                                                onClick={() => this.handleDetele(item)}
                                            >Xóa</button> 
                                        </td>
                            
                                    </tr>
                                )
                            })}

                            
                        </tbody>
                    </table>
                    <Modal
                        ariaHideApp={false}
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                    >
                        <form onSubmit={this.handleEditSubmit} className="form-horizontal" >
                            <div className="form-group">
                                <label htmlFor="ID_LAPTOP">ID Laptop:</label>
                                <h3>{this.state.ID_LAPTOP}</h3>
                            </div>
                            <div className="form-group">
                                <label htmlFor="TEN_LAPTOP">Tên Laptop:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="TEN_LAPTOP"
                                    name="TEN_LAPTOP"
                                    value={this.state.TEN_LAPTOP}
                                    onChange={this.handleInputChange}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="MOTANGAN_LAPTOP">Mô tả ngắn:</label>
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="MOTANGAN_LAPTOP"
                                    name="MOTANGAN_LAPTOP"
                                    value={this.state.MOTANGAN_LAPTOP}
                                    onChange={this.handleInputChange}
                                >
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="MOTA_LAPTOP">Mô tả chi tiết:</label>
                                <textarea 
                                    className="form-control" 
                                    rows="8" 
                                    id="MOTA_LAPTOP"
                                    name="MOTA_LAPTOP"
                                    value={this.state.MOTA_LAPTOP}
                                    onChange={this.handleInputChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="GIA_LAPTOP">Giá:</label>
                                <input 
                                    type="number"
                                    min="0" 
                                    className="form-control" 
                                    id="GIA_LAPTOP"
                                    name="GIA_LAPTOP"
                                    value={this.state.GIA_LAPTOP}
                                    onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="IMG">Link ảnh:</label>
                                <input 
                                    type="url" 
                                    className="form-control" 
                                    id="IMG"
                                    name="IMG"
                                    value={this.state.IMG}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ID_LOAI">Loại Laptop (in: Inspiron, vos: Vostro, gm: Gaming):</label>
                                
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="ID_LOAI"
                                    name="ID_LOAI"
                                    value={this.state.ID_LOAI}
                                    onChange={this.handleInputChange}
                                    />

                            
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10 col-sm-offset-2">
                                    <button type="submit" className="btn btn-primary">Sửa</button>
                                    <button onClick={this.closeModal} className="br btn btn-danger">Ngừng Sửa</button>
                                </div>
                            </div>
                        </form>
                    </Modal>
                    
                </div>
            </div>
            
        )
    }   
}

export default LapTopList;