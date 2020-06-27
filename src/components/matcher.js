import React from "react";
import { auth, db } from "../services/firebase"

// decide if lawyer or survivor
// if lawyer, loop through all survivor profiles (if survivor, loop through all lawyers)
// if criteria matches, create new request object
// add to that lawyer's matches array, add to that survivor's matches array

export default function Matcher(userDetails, userID) {

    if (userDetails.isLawyer) {
        db.ref("users/").once("value").then(function (snapshot) {
            var keys = Object.keys(snapshot.val());
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];

                db.ref("users/" + k).once("value").then(function (snapshot) {
                    if (snapshot.child("isSurvivor").val() === true) {
                        var location = snapshot.child("currentCounty").val();
                        var finances = snapshot.child("financialCapability").val();

                        if (userDetails.practiceCounty.includes(location)) {

                            if (finances === "I am able to pay the legal fees") {
                                db.ref("requests/" + 'abc').set({
                                    lawyerID: userID,
                                    survivorID: k,
                                    survivorStatus: "New Match!",
                                    lawyerStatus: "",
                                    survivorMessage: "",
                                    survivorContact: "",
                                });
                            }

                            if (userDetails.compensationRequest.includes("pro bono")) {
                                if (finances !== "I am able to pay the legal fees") {
                                    db.ref("requests/" + 'abc').set({
                                        lawyerID: userID,
                                        survivorID: k,
                                        survivorStatus: "New Match!",
                                        lawyerStatus: "",
                                        survivorMessage: "",
                                        survivorContact: "",
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
                var k = keys[i];

                db.ref("users/" + k).once("value").then(function (snapshot) {
                    if (snapshot.child("isLawyer").val() === true) {
                        var locations = snapshot.child("practiceCounty").val();
                        var compensation = snapshot.child("compensationRequest").val();

                        if (locations.includes(userDetails.currentCounty)) {

                            if (userDetails.financialCapability === "I am able to pay the legal fees") {
                                db.ref("requests/" + 'abc').set({
                                    lawyerID: k,
                                    survivorID: userID,
                                    survivorStatus: "New Match!",
                                    lawyerStatus: "",
                                    survivorMessage: "",
                                    survivorContact: "",
                                });
                            }

                            if (compensation.includes("pro bono")) {
                                if (userDetails.financialCapability !== "I am able to pay the legal fees") {
                                    db.ref("requests/" + 'abc').set({
                                        lawyerID: k,
                                        survivorID: userID,
                                        survivorStatus: "New Match!",
                                        lawyerStatus: "",
                                        survivorMessage: "",
                                        survivorContact: "",
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