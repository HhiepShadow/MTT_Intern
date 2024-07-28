import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { District } from "../../models/District";
import api from "../../api/axios";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { Province } from "../../models/Province";

const Districts = () => {
  const [districts, setDistricts] = useState<District[]>([]);

  const [provinceName, setProvinceName] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    const getAllDistrictsByProvinceID = async () => {
      try {
        const response = await api.get(`/district/${id}`);
        const data = response.data;
        setDistricts(data.results);
      } catch (ex) {
        if (ex instanceof AxiosError) {
          if (ex.response) {
            console.log(ex.response.data);
            console.log(ex.response.headers);
            console.log(ex.response.status);
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

    const getProvinceNameByID = async () => {
      try {
        const response = await api.get("/");
        const data = await response.data;
        const province: Province = data.results.find(
          (p: Province) => p.province_id === id
        );
        setProvinceName(province.province_name);
        console.log(provinceName);
      } catch (ex) {
        if (ex instanceof AxiosError) {
          if (ex.response) {
            console.log(ex.response.data);
            console.log(ex.response.headers);
            console.log(ex.response.status);
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

    getAllDistrictsByProvinceID();
    getProvinceNameByID();
  });

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Latitude</TableCell>
          <TableCell>Longtitude</TableCell>
          <TableCell>Province</TableCell>
        </TableHead>
        <TableBody>
          {districts.map((dist) => (
            <TableRow key={dist.district_id}>
              <TableCell>{dist.district_id}</TableCell>
              <TableCell>{dist.district_name}</TableCell>
              <TableCell>{dist.district_type}</TableCell>
              <TableCell>{dist.lat}</TableCell>
              <TableCell>{dist.lng}</TableCell>
              <TableCell>{provinceName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Districts;
