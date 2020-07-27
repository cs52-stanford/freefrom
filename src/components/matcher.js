import React from "react";
import { db, auth } from "../services/firebase"

export default function Matcher(userDetails, userID) {
    if (auth().currentUser && userDetails.isLawyer) {
        db.ref("users/").once("value").then(function (snapshot) {
            var keys = Object.keys(snapshot.val());
            for (var i = 0; i < keys.length; i++) {
                const newUserID = keys[i];
                db.ref("users/" + newUserID).once("value").then(function (snapshot) {
                    if (snapshot.child("isSurvivor").val() === true) {
                        var location = snapshot.child("currentCounty").val();
                        var finances = snapshot.child("financialCapability").val()
                        if (userDetails.practiceCounty.includes(location)) {
                            if (finances === "I am able to pay the legal fees") {
                                db.ref("requests/" + userID + newUserID).set({
                                    lawyerID: userID,
                                    survivorID: newUserID,
                                    survivorStatus: "New Match!",
                                    lawyerStatus: "",
                                    survivorMessage: "",
                                    survivorContact: "",
                                    lawyerMessage: "",
                                });
                            }

                            if (userDetails.compensationRequest.includes("Pro bono")) {
                                if (finances !== "I am able to pay the legal fees") {
                                    db.ref("requests/" + userID + newUserID).set({
                                        lawyerID: userID,
                                        survivorID: newUserID,
                                        survivorStatus: "New Match!",
                                        lawyerStatus: "",
                                        survivorMessage: "",
                                        survivorContact: "",
                                        lawyerMessage: "",
                                    });
                                }
                            }

                        }
                    }
                });
            }
        });
    } else {
        db.ref("users/").once("value").then(function (snapshot) {
            var keys = Object.keys(snapshot.val());
            for (var i = 0; i < keys.length; i++) {
                const k = keys[i];

                db.ref("users/" + k).once("value").then(function (snapshot) {
                    if (snapshot.child("isLawyer").val() === true) {
                        var locations = snapshot.child("practiceCounty").val();
                        var compensation = snapshot.child("compensationRequest").val();

                        if (locations.includes(userDetails.currentCounty)) {

                            if (userDetails.financialCapability === "I am able to pay the legal fees") {
                                db.ref("requests/" + k + userID).set({
                                    lawyerID: k,
                                    survivorID: userID,
                                    survivorStatus: "New Match!",
                                    lawyerStatus: "",
                                    survivorMessage: "",
                                    survivorContact: "",
                                    lawyerMessage: "",
                                });
                            }

                            if (compensation.includes("pro bono")) {
                                if (userDetails.financialCapability !== "I am able to pay the legal fees") {
                                    db.ref("requests/" + k + userID).set({
                                        lawyerID: k,
                                        survivorID: userID,
                                        survivorStatus: "New Match!",
                                        lawyerStatus: "",
                                        survivorMessage: "",
                                        survivorContact: "",
                                        lawyerMessage: "",
                                    });
                                }
                            }

                        }
                    }
                });
            }
        });
    }
}