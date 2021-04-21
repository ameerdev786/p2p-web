import React from 'react'

function Theme() {
    return (
       
  <div className="flex  w-full p-8 ">
    <div className="w-1/2 px-8 flex flex-wrap">
      <div className="w-1/2 px-2">
        <label for="">Text Colors</label>
        <div className="flex flex-col"  >
          <label for="" className="capitalize"> email </label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              className="h-10"
              v-model="item.value"
             
            />
            <input type="text"/>
          </div>
        </div>
      </div>
      <div className="w-1/2 px-2">
        <label for="">Bg Colors</label>
        <div className="flex flex-col" v-for="(item, i) in bgColorsForm" >
          <label for="" className="capitalize">password</label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              className="h-10"
              v-model="item.value"
            
            />
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-full"
        ></textarea>
      </div>
    </div>
    <div className="flex bg-pink-500 flex-col rounded-lg space-y-5 w-1/2 p-8">
      <div className="w-1/1 flex space-x-10">
        <router-link to="login" tag="a">Login</router-link>
        <router-link to="swap" tag="a">Swap</router-link>
        <router-link to="home" tag="a">Home</router-link>
      </div>
      <div className="card p-2 w-full dash flex flex-wrap space-x-4 space-y-2 items-start">
        <button className="bg-skin-primary">Primary</button>
        <button className="bg-skin-secondary">Secondary</button>
        <button className="bg-skin-accent">Accent</button>
        <button className="bg-skin-success">Success</button>
        <button className="bg-skin-danger">Danger</button>
        <button className="bg-skin-warning">Warning</button>
        <button className="bg-skin-outline">Outline</button>
        <input type="text" placeholder="Some text" />
        <select>
          <option value="">Ada</option>
        </select>
        <textarea name="" id=""></textarea>
      </div>
      <div className="card p-4">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Heading 1</th>
              <th>Heading 2</th>
              <th>Heading 3</th>
            </tr>
          </thead>
          <tbody>
            <tr  >
              <td>1</td>
              <td>some data</td>
              <td>some value</td>
              <td>some actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

            
      
    )
}

export default Theme;
