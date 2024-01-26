import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 45px 40px;
`;

export const ButtonsRow = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(228,228,228,1) 100%);
    border: 1px solid #C8C8C8;
    border-radius: 5px;
    display: flex;
    padding: 4px;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    & > div {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    color: ${props => props.disabled ? '#ccc' : 'black'};
    gap: 7px;
    padding: 5px;
    border: ${props => props.disabled ? '1px solid #ccc' : '1px solid gray'};
    border-radius: 5px;
    font-size: 16px;
    cursor: ${props => props.disabled ? 'unset' : 'pointer'};
`;

export const FileUploadForm = styled.div`
    > div {
        border: 1px dotted #a3a3a3;
        width: 100%;
        padding: 10px;
    }
    p {
        font-size: 16px;
    }
`;

export const FileUpload = styled.label`
    input {
        display: none;
    }
    display: inline-block;
    background-color: rgb(239, 239, 239);
    border-radius: 5px;
    padding: 5px;
    border: 1px solid gray;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 10px;
`

export const PlayIcon = styled.img`
    height: 12px;
    ${props => props.down && `
        transform: rotate(90deg);
        height: 8px;
    `};
`;

export const Icon = styled(PlayIcon)`
    margin-right: 5px;
`;

export const Table = styled.table`
    table-layout: auto;
    width: 100%;
    margin-top: 20px;

    thead {
        background-color: #EEEEEE;
    }
    
    *:not(tr,th) {
        border: none;
    }
    
    tr {
        border: none;
        font-size: 16px;
        border-bottom: 1px solid #EEEEEE;
    }
    
    th {
        font-size: 16px;
        font-weight: 500;
        padding: 12px;
        text-align: left;
        border:2px solid white;
    }
    
    td {
        padding: 12px;
        cursor: pointer;
    }
    
    tbody tr:hover {
        background-color: #eeeeee6b;
    }
`;

export const ProcessLine = styled.div`
    margin-bottom: 10px;
`;

export const Search = styled.label`
    position: relative;
    height: 30px;
    width: 250px;
    
    input {
        padding: 5px 5px 5px 30px;
        border: 1px solid #ccc;
        border-radius: 50px;
        font-size: 16px;
        position: absolute;
        top: 0;
    }

    &:before {
        content: "";
        position: absolute;
        left: 10px;
        top: 5px;
        bottom: 0;
        width: 20px;
        z-index: 1;
        background: url("/search.svg") no-repeat;
    }
`;