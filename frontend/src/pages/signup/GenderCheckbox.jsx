const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900 checkbox-secondary" />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900 checkbox-secondary" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;


// STARTER CODE FOR THE GENDERCHECKBOX

// const GenderCheckbox = () => {
//     return (
//       <div className="flex">
//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text">Male</span>
//             <input type="checkbox" className="checkbox border-slate-900 checkbox-secondary" />
//           </label>
//         </div>
  
//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text">Female</span>
//             <input type="checkbox" className="checkbox border-slate-900 checkbox-secondary" />
//           </label>
//         </div>
//       </div>
//     );
//   };