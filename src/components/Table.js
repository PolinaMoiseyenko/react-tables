import React, { Component } from 'react';

class TableHeader extends Component {
    render() {
        const { header } = this.props;
        return (
            <th>{ header }</th>
        );
    }
};

class TableRow extends Component {
    render() {
        const { row } = this.props;
        return (
           <tr> 
               {
                   row.map(data => {
                    return (<td>{data}</td>)
                })
               }               
           </tr>
        );
    }
};

export {TableHeader, TableRow}