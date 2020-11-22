import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './Note';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class MainService {

 
  private baseUrl = "http://localhost:8080";

 constructor(private _http: HttpClient) {}

//  getUser() {
//    console.log(this.baseUrl + "/agents")
//    return this._http.get<User>(this.baseUrl + "/User");
//  }
 
 getNotes() {
  return this._http.get<Note[]>(this.baseUrl + "/note");
}

//  saveAgent(agent:Agent){
//    return this._http.post<Agent>(this.baseUrl+"/agents",agent);
//  }

//  updateAgent(agent:Agent){
//    return this._http.put<Agent>(this.baseUrl + "/agents/" + agent.agentId, agent);
//  }

//  removeAgent(agentId:number){
//    return this._http.delete<Object>(this.baseUrl+"/agents/"+agentId)
//  }
}
