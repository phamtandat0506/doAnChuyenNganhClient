//import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import axios from "axios";
import Modal from 'react-modal';

class LapTopList extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            loais: [],
            ID_LOAI: '',
            TEN_LOAI: ''
        }
      };
    componentDidMount() {

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
            ID_LOAI: item.ID_LOAI,
            TEN_LOAI: item.TEN_LOAI
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    inputChange = (e) => {
        // console.log(e.target.value);
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name] : value
        })
    }

    handleEditSubmit = (e) => {
        e.preventDefault();

        let key = true 
        if(document.getElementById("TEN_LOAI").value === ''){
            key = false 
        }

        if(key == false ){
            alert("KKhông được bỏ trống tên loại sản phẩm")
        }else {
            const loaiUpdate = {
                ID_LOAI: this.state.ID_LOAI,
                TEN_LOAI: this.state.TEN_LOAI
            }
    
            axios.post('http://localhost:4000/api/update', loaiUpdate)
            .then(res => {
                var key = this.state.ID_LOAI
                this.setState(prevState => ({
                    loais: prevState.loais.map(
                        elm => elm.ID_LOAI === key ? {
                            ...elm,
                            TEN_LOAI: this.state.TEN_LOAI
                        }: elm
                    )
                }))
                alert("Sửa Thành Công!")
                this.closeModal()
            })
            .catch(error => console.log(error));
        }

            

    }

    handleInsertSubmit = (e) => {
        e.preventDefault();

        var a = true
        if(document.getElementById("id").value === ""){
            alert("Hãy nhập đầy đủ id loại!")
           
            a = false
        }
        if(document.getElementById("name").value === ""){
            alert("Hãy nhập đầy đủ tên loại!")
            
            a = false
        }
        
        if(a === false){
            console.log(a);
        }else{
            const newLoai = {
                ID_LOAI: this.state.txtId,
                TEN_LOAI: this.state.txtTen
            };
            console.log(newLoai)
    
            axios.post('http://localhost:4000/api/insert', newLoai)
            .then(res => {
                alert("Thêm Thành Công!")
                let loais = this.state.loais
                loais = [newLoai,...loais]
                this.setState({loais : loais})

                var c = " "
                document.getElementById('id').value = c
                document.getElementById('name').value = c
            })
            .catch(error => console.log(error));
        }

    }

    

    handleDelete = (item) => {
        const idNew = {
            ID_LOAI: item.ID_LOAI
        }
        if(confirm('Bạn chắc chắn muốn xóa không? ')){ //eslint-disable-line
            axios.post('http://localhost:4000/api/delete', idNew)
            .then(res => {
                this.setState(prevState => ({
                    loais: prevState.loais.filter(elm => elm.ID_LOAI !== item.ID_LOAI)
                }));
                alert("Xóa Thành Công!")
            })
            .catch(err => console.log(err))
        }
        
    }


    render() {
        var {loais } = this.state
        return(
            
            <div className="panel panel-primary mr-top">

                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Loại Laptop</h3>
                </div>
                <form onSubmit={this.handleInsertSubmit} className="form-horizontal">
                 <div className="panel-body">
                    <div className="form-group">
                    <label htmlFor="name">Mã loại:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="id"
                            name="txtId"
                            onChange={this.inputChange}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Tên Loại:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name"
                            name="txtTen"
                            onChange={this.inputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu</button>

        
                </div>

                </form>

                <div className="panel-heading">
                        <h3 className="panel-title">Quản Lý Loại Laptop</h3>
                </div>
                <div className="panel-body">
                    
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Số Thứ Tự</th>
                                <th>Mã Loại</th>
                                <th>Tên Loại</th>
                                <th>Hành Động</th>
                                
                            </tr>
                        </thead>
                        <tbody>

                  {loais.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.ID_LOAI}</td>
                                        <td>{item.TEN_LOAI}</td>
                                        
                                         <td>
                                            <button 
                                                type="button" 
                                                className="mr-5 btn btn-warning"
                                                onClick={() => this.openModal(item)}
                                            >Sửa</button>
                                            <button 
                                                type="button" 
                                                className="mr-5 btn btn-danger"
                                                onClick={() => this.handleDelete(item)}
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
                        onRequestClose={this.closeModal}>
                        <div className="panel-heading">
                                <h1 className="panel-title text-center">Sửa Loại Laptop</h1>
                        </div>
                        <div>
                            
                            <form onSubmit={this.handleEditSubmit} className="form-horizontal">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label htmlFor="ID_LOAI">Mã loại:</label>
                                        <h3>{this.state.ID_LOAI}</h3>
                                       {/** <input  
                                            type="text" 
                                            className="form-control" 
                                            id="ID_LOAI"
                                            name="ID_LOAI"
                                            value={this.state.ID_LOAI}
                                            onChange={this.inputChange}
                                        />*/}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TEN_LOAI">Tên Loại:</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="TEN_LOAI"
                                            name="TEN_LOAI"
                                            value={this.state.TEN_LOAI}
                                            onChange={this.inputChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sửa</button>
                                    <button onClick={this.closeModal} className="br btn btn-danger">Ngừng Sửa</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
            
        )
    }
}

export default LapTopList;