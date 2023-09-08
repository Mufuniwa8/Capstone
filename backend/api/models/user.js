require('dotenv').config();
const cors = require("cors");
const express = require("express");
const app = express();
const database = require("../config/index.js");
const path = require("path");
// const port = +process.env.PORT || 3301;
const bodyParser = require("body-parser");

app.use(express.static("./static"));
app.use(bodyParser.json());
app.use(cors());

const fetchUser = (result) => {
    const query = `SELECT * FROM User;`;
    database.query(query, (error, res) => {
     
        if (error) {
            console.log(error);
            result(error, null);
            return;
        } else {
            result(null, res);
        }
    });
};

const fetchUserByID = (id, res) => {
    const query = `select userID, firstName, lastName, userRole, userPassword, userProfile from User where userID = ${id};`;
    database.query(query, (error, data) => {
        if (error) throw error;
        res.json({status: res.statusCode, results: data});
    });
};

const fetchInsertUser = (data,result) => {
    database.query("INSERT INTO User SET?;", [data], (error, results) => {
       if (error) {
        console.log(error);
        result(error, null);
       }
       else {
        result(null, results);
       }
    });
   };

const fetchDeleteUser = (id, result) => {
    database.query("delete from User where userID = ?",[id], (error, results) => {
        if (error) {
            console.log(error);
            result(error, null);
        }
        else{
            result(null, results);
        }
    });
    };

    const updateUserInfo = (id, data, result) => {
        database.query("UPDATE User SET firstName = ?, lastName = ?, userRole = ?, userPassword = ?, userProfile = ?",
        [
            data.firstName,
            data.lastName,
            data.userRole,
            data.userPassword,
            data.userProfile,
            id,
        ],
        (error, results) => {
            if (error) {
                console.log(error);
                result({ error: "Could'nt update user"}, null)
            }
            else {
                result(null, results);
            }
        }
        );
    };

    //register
    const registerUser = (req, res) => {
        {}
    }
    //end of register

const loginUser = (req, res) => {
    const { email, userPassword } = req.body;
    const query = `Select firstName, lastName, userRole, userRole, userProfile from User where email = '${email}'`;
    database.query(query, async (error, results) => {
        if (error) throw error;
        if (!results?.length) {
            res.json({
                status: res.statusCode,
                message: "Invalid email",
            });
        }
        else {
            await compare(userPassword, result[0].userPassword, (cError, cResult) => {
                if (cError) throw cError;
                const token = createToken({
                    email,
                    userPassword,
                });
                res.cookie("ApprovedUser", token, {
                    maxAge: 100,
                    httpOnly: true,
                });
                if (cResults) {
                    res.json({
                        message: "enter another token",
                        token,
                        results: result[0],
                    });
                }
                else {
                    res.json({
                        status: res.statusCode,
                        message: "unregistered user"
                    })
                }
            })
        }
    })
}


module.exports = {
    fetchUser,
    fetchUserByID,
    fetchInsertUser,
    fetchDeleteUser,
    loginUser,
    updateUserInfo

}