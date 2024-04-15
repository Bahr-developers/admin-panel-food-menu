import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AddLanguage from "../Modals/AddLanguage";
import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import { MdEdit } from "react-icons/md";
import { ALL_DATA } from "../Query/ALL_DATA";
import { BiTrash } from "react-icons/bi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LanguageUtils } from "../utils/language.utils";
import { QUERY_KEY } from "../Query/QUERY_KEY";

const Addlanguage = () => {
    const language = ALL_DATA.useLanguage()
    const queryClient = useQueryClient()
    const deleteLanguage = useMutation({
        mutationFn: LanguageUtils.deleteLanguage,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [QUERY_KEY.language]})
        }
    })
    return (
        <>
            <Navbar/>
            <div className="header-language flex justify-between sm:container px-3">
                <h2 className="text-[20px] font-bold">Language</h2>
                <AddLanguage/>
            </div>
            <div className="body mt-2">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, marginTop: 5 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell >№</TableCell>
                        <TableCell>Language</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {language.data?.length &&  language.data.map((lang, i) => (
                        <TableRow
                        key={lang._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell sx={{width: "15px" }}>
                            {i+1}
                        </TableCell>
                        <TableCell sx={{width: "15px" }}>
                            {lang.title}
                        </TableCell>
                        <TableCell sx={{width: "15px" }}>
                            {lang.code}
                        </TableCell>             
                        <TableCell sx={{width: "15px" }}>
                            <MdEdit size={20}/>
                        </TableCell>
                        <TableCell sx={{width: "15px", cursor: "pointer"}}>
                            <BiTrash onClick={()=> deleteLanguage.mutate(lang._id)} size={25}/>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <MiniNav/>
        </>
    );
};

export default Addlanguage;