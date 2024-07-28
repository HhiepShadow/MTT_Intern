import { useEffect, useState } from "react";
import { Province } from "../../models/Province";
import api from "../../api/axios";
import { AxiosError } from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const Provinces = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);

  useEffect(() => {
    const getAllProvince = async () => {
      try {
        const response = await api.get("/");
        const data = await response.data;
        setProvinces(data.results);
      } catch (ex) {
        if (ex instanceof AxiosError) {
          if (ex.response) {
            console.log(ex.response?.data);
            console.log(ex.response?.headers);
            console.log(ex.response?.status);
          } else if (ex.request) {
            console.log(ex.request);
          } else {
            console.log(ex.message);
          }
        } else {
          console.log(ex);
        }
      }
    };

    getAllProvince();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
          </TableHead>

          <TableBody>
            {provinces &&
              provinces.map((prov) => (
                <TableRow key={prov.province_id}>
                  <TableCell>
                    <Link to={`${prov.province_id}`} style={{
                      textDecoration: 'none',
                      color: 'black'
                    }}>{prov.province_id}</Link>
                  </TableCell>
                  <TableCell>{prov.province_name}</TableCell>
                  <TableCell>{prov.province_type}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Provinces;
