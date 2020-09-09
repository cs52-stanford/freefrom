import React from "react";
import { db, auth } from "../services/firebase";
import sendEmail from "./sendEmail.js";

export default function Matcher(userDetails, userID) {
    if (auth().currentUser && userDetails.isLawyer) {
        db.ref("users/").once("value").then(function (snapshot) {
            var keys = Object.keys(snapshot.val());
            for (var i = 0; i < keys.length; i++) {
                const newUserID = keys[i];
                db.ref("users/" + newUserID).once("value").then(function (snapshot) {
                    if (snapshot.child("isSurvivor").val() === true) {
                        var location = snapshot.child("currentCounty").val();
                        var finances = snapshot.child("financialCapability").val();
                        var notificationType = snapshot.child("emailNotifications").val();
                        var name = snapshot.child("name").val();
                        var email = snapshot.child("email").val();
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
                                if (notificationType === "For every new match") {
                                    sendEmail('survivor', 'For every new match', name, email);
                                }
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
                                    if (notificationType === "For every new match") {
                                        sendEmail('survivor', 'For every new match', name, email);
                                    }
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
                        var notificationType = snapshot.child("numNotifications").val();
                        var name = snapshot.child("name").val();
                        var email = snapshot.child("email").val();

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
                                if (notificationType === "For every new match") {
                                    sendEmail('lawyer', 'For every new match', name, email);
                                }
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
                                    if (notificationType === "For every new match") {
                                        sendEmail('lawyer', 'For every new match', name, email);
                                    }
                                }
                            }

                        }
                    }
                });
            }
        });
    }
}