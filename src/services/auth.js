import { auth } from "../services/firebase";
import DemographicsCard from "../components/make_account_card";
import ProfileCard from "../components/lawyer_profile_info_card";
import CaseCard from "../components/case_info_card";

export function signup(
  email,
  password
  // DemographicsCard,
  // ProfileCard,
  // CaseCard
) {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      var data = {
        email: email,
        password: password,
        id: user.uid,
        // DemographicsCard,
        // ProfileCard,
        // CaseCard,
      };
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}
