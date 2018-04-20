import React, { Component } from 'react';
import DefaultCompanies from '../DefaultCompanies';
import Dropzone from 'react-dropzone';
import pp from 'papaparse';
import { CSVLink } from 'react-csv';

class CompanyDetail extends Component {

    constructor() {
        super();
        this.state = {
            companyDetail: JSON.parse(localStorage.getItem('companyDetail')) || { ...DefaultCompanies }
        };

        this.onDrop = this.onDrop.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.dataStringify = this.dataStringify.bind(this);
    }

    onDrop(e) {
        console.log(e);
        pp.parse(e[0], {
            header: true,
            complete: this.updateInfo
        });
    }

    updateInfo(result) {
        console.log(result.data[0]);

        let updatedState = {

            name: result.data[0].name,
            contact: result.data[0].contact,
            address: result.data[0].address

        }
        this.setState({ companyDetail: { ...updatedState } }, () =>
            localStorage.setItem('companyDetail', JSON.stringify(this.state.companyDetail)));
        this.forceUpdate();
    }

     dataStringify() {
        let data = this.state.companyDetail;
        return (Object.entries(data));
    }

    render() {
        return (
            <div>
                <h2>Company Detail</h2>
                <label htmlFor="">Company Name</label>
                <p type="text" name='name' >{this.state.companyDetail.name}</p>
                <label htmlFor="">Contact number</label>
                <p type="text" name='contact'>{this.state.companyDetail.contact}</p>
                <label htmlFor="">Address</label>
                <p type="text" name='address'>{this.state.companyDetail.address}</p>
                <CSVLink data={this.dataStringify()} >Click to download CSV</CSVLink>
                <hr />
                <Dropzone name='dzone' onDrop={(e) => this.onDrop(e)}> Drop your file here</Dropzone>
            </div>
        )
    }
}

export default CompanyDetail;