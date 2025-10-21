import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLinkedSizes } from '../../../store/slices/linkedSizes';


const sizeOptions = Array.from({ length: 20 }, (_, i) => `${32 + i * 2}`);

function LinkedSizesSelector() {
  const dispatch = useDispatch();
  const linkedSizes = useSelector((state) => state.linkedSizes);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [groups, setGroups] = useState(linkedSizes);

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleAddGroup = () => {
    if (selectedSizes.length > 1) {
      const newGroups = [ ...groups , selectedSizes];
      dispatch(setLinkedSizes([ ...linkedSizes , selectedSizes ]));
      setGroups(newGroups);
      console.log(linkedSizes)
      setSelectedSizes([]);
    }
  };

  const handleRemoveGroup = (index) => {
    const newGroups = groups.filter((_, i) => i !== index);
    dispatch(setLinkedSizes(newGroups));
    setGroups(newGroups);
  };

  return (
    <div className="my-5">
      <h4 className="font-vazirmatn text-sm mb-2">گروه‌بندی سایزهای متصل</h4>
      <div className="flex flex-wrap gap-3">
        {sizeOptions.map((size) => (
          <label key={size} className="flex items-center gap-1 text-sm">
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => toggleSize(size)}
            />
            {size}
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddGroup}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded text-sm"
      >
        افزودن گروه
      </button>

      <div className="mt-3">
        {groups.map((group, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded my-1"
          >
            <span className="text-xs">{group.join(', ')}</span>
            <button
              onClick={() => handleRemoveGroup(index)}
              className="text-red-500 text-xs"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkedSizesSelector;