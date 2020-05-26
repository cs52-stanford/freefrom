import { auth } from "../services/firebase";
import DemographicsCard from "../components/make_account_card";
import ProfileCard from "../components/lawyer_profile_info_card";
import CaseCard from "../components/case_info_card";

export function signup(email, password, user) {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      user(DemographicsCard);
      user(ProfileCard);
      user(CaseCard);
    })
    .catch(function (error) {
      // An error happened.
    });
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}
